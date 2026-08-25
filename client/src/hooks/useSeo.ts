import { useEffect } from "react";
import { CLINIC_INFO } from "@shared/const";

type SeoOptions = {
  /** Parte específica da página. O nome da clínica é acrescentado ao final. */
  title: string;
  /** Resumo exibido pelo Google abaixo do link. Ideal entre 120 e 160 caracteres. */
  description: string;
};

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

function upsertCanonical(href: string) {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }

  link.setAttribute("href", href);
}

/**
 * Define título e descrição da página atual.
 *
 * O site é uma SPA servida como HTML estático, então estas tags são aplicadas
 * pelo navegador depois que o JavaScript carrega. O Google executa JavaScript e
 * as utiliza; já as prévias de link do WhatsApp e das redes sociais leem apenas
 * o HTML inicial, e por isso usam sempre as tags fixas de client/index.html.
 */
export function useSeo({ title, description }: SeoOptions) {
  const fullTitle = `${title} | ${CLINIC_INFO.name}`;

  useEffect(() => {
    document.title = fullTitle;

    upsertMeta("name", "description", description);
    upsertMeta("property", "og:title", fullTitle);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", window.location.href);
    upsertMeta("name", "twitter:title", fullTitle);
    upsertMeta("name", "twitter:description", description);

    upsertCanonical(`${window.location.origin}${window.location.pathname}`);
  }, [fullTitle, description]);
}
