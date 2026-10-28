import PptxGenJSImport from "pptxgenjs";
import {
  propostaMeta,
  proposalSlides,
  renderTextParts,
  slideIndexLabel,
  type ProposalSlide,
  type SlideTheme,
  type TextPart,
} from "./content";

type PptxConstructor = typeof PptxGenJSImport;
const PptxGenJS = (
  typeof PptxGenJSImport === "function"
    ? PptxGenJSImport
    : (PptxGenJSImport as unknown as { default: PptxConstructor }).default
) as PptxConstructor;

const COLORS = {
  green: "389480",
  yellow: "E9AD35",
  ink: "2F2F30",
  cream: "ECE4D4",
  paper: "F7F3EA",
  white: "FFFDF8",
} as const;

const THEME: Record<
  SlideTheme,
  { bg: string; fg: string; muted: string; accent: string; quoteBg: string }
> = {
  cover: {
    bg: COLORS.yellow,
    fg: COLORS.ink,
    muted: COLORS.ink,
    accent: COLORS.green,
    quoteBg: COLORS.cream,
  },
  yellow: {
    bg: COLORS.yellow,
    fg: COLORS.ink,
    muted: COLORS.ink,
    accent: COLORS.green,
    quoteBg: COLORS.cream,
  },
  paper: {
    bg: COLORS.paper,
    fg: COLORS.ink,
    muted: "555555",
    accent: COLORS.green,
    quoteBg: COLORS.cream,
  },
  cream: {
    bg: COLORS.cream,
    fg: COLORS.ink,
    muted: "555555",
    accent: COLORS.green,
    quoteBg: COLORS.white,
  },
  ink: {
    bg: COLORS.ink,
    fg: COLORS.cream,
    muted: "BDB5A5",
    accent: COLORS.yellow,
    quoteBg: "3A3A3B",
  },
  green: {
    bg: COLORS.green,
    fg: COLORS.cream,
    muted: "D8EFE8",
    accent: COLORS.yellow,
    quoteBg: "2F7A6A",
  },
};

export const PPTX_FILENAME = "proposta-melive-zetti.pptx";

/** Match Melive web typography: Impact for display, Arial for body. */
const FONT = {
  display: "Impact",
  body: "Arial",
} as const;

function headlineRuns(
  parts: TextPart[],
  theme: (typeof THEME)[SlideTheme],
  opts: { fontSize: number },
): PptxGenJS.TextProps[] {
  return parts.map((part, index) => ({
    text: `${index > 0 && part.strong ? "\n" : ""}${part.text}`,
    options: {
      fontSize: opts.fontSize,
      fontFace: FONT.display,
      bold: true,
      color: part.strong
        ? theme.bg === COLORS.yellow
          ? COLORS.cream
          : theme.accent
        : part.emphasis
          ? theme.accent
          : theme.fg,
      breakLine: false,
    },
  }));
}

function addIndex(
  slide: PptxGenJS.Slide,
  data: ProposalSlide,
  theme: (typeof THEME)[SlideTheme],
) {
  slide.addShape("rect", {
    x: 0.5,
    y: 0.42,
    w: 0.35,
    h: 0.06,
    fill: { color: theme.accent },
    line: { color: theme.accent },
  });
  slide.addText(slideIndexLabel(data), {
    x: 0.95,
    y: 0.3,
    w: 8.5,
    h: 0.35,
    fontSize: 11,
    fontFace: FONT.display,
    bold: true,
    color: theme.fg,
    charSpacing: 4,
  });
}

function addQuote(
  slide: PptxGenJS.Slide,
  quote: string,
  theme: (typeof THEME)[SlideTheme],
  box: { x: number; y: number; w: number; h: number },
) {
  slide.addShape("rect", {
    ...box,
    fill: { color: theme.quoteBg },
    line: { color: theme.quoteBg },
  });
  slide.addShape("rect", {
    x: box.x,
    y: box.y,
    w: 0.08,
    h: box.h,
    fill: { color: COLORS.yellow },
    line: { color: COLORS.yellow },
  });
  slide.addText(quote, {
    x: box.x + 0.25,
    y: box.y + 0.15,
    w: box.w - 0.4,
    h: box.h - 0.3,
    fontSize: 14,
    fontFace: FONT.body,
    bold: true,
    color: theme.bg === COLORS.ink || theme.bg === COLORS.green ? COLORS.cream : COLORS.ink,
    valign: "middle",
  });
}

function buildSlide(pptx: PptxGenJS, data: ProposalSlide) {
  const theme = THEME[data.theme];
  const slide = pptx.addSlide();
  slide.background = { color: theme.bg };

  switch (data.layout) {
    case "cover":
    case "close": {
      slide.addShape("ellipse", {
        x: 8.2,
        y: -1.2,
        w: 3.5,
        h: 3.5,
        fill: { type: "none" },
        line: { color: COLORS.cream, width: 1.5, transparency: 30 },
      });
      slide.addText(
        [
          {
            text: data.kicker.toUpperCase(),
            options: {
              fill: { color: COLORS.green },
              color: COLORS.cream,
              fontSize: 11,
              bold: true,
              fontFace: FONT.display,
            },
          },
          {
            text: `  LÂMINA ${data.number}`,
            options: {
              color: COLORS.ink,
              fontSize: 11,
              bold: true,
              fontFace: FONT.display,
            },
          },
        ],
        { x: 0.6, y: 0.7, w: 8.8, h: 0.4 },
      );
      slide.addText(headlineRuns(data.headline, theme, { fontSize: 36 }), {
        x: 0.6,
        y: 1.4,
        w: 8.8,
        h: 2.2,
        valign: "top",
      });
      slide.addText(data.lead, {
        x: 0.6,
        y: 3.7,
        w: 7.5,
        h: 1.1,
        fontSize: 16,
        fontFace: FONT.body,
        color: theme.fg,
      });
      if (data.layout === "close") {
        slide.addText(data.tagline, {
          x: 0.6,
          y: 4.95,
          w: 8,
          h: 0.4,
          fontSize: 12,
          fontFace: FONT.body,
          bold: true,
          color: theme.fg,
        });
      }
      slide.addText(`${propostaMeta.brand.left}  +  ${propostaMeta.brand.right}`, {
        x: 0.6,
        y: 5.35,
        w: 8,
        h: 0.35,
        fontSize: 18,
        fontFace: FONT.display,
        bold: true,
        color: theme.fg,
      });
      break;
    }

    case "split-copy": {
      addIndex(slide, data, theme);
      slide.addText(headlineRuns(data.headline, theme, { fontSize: 28 }), {
        x: 0.5,
        y: 0.9,
        w: 4.4,
        h: 3.2,
        valign: "top",
      });
      let y = 0.95;
      for (const paragraph of data.paragraphs) {
        slide.addText(paragraph, {
          x: 5.2,
          y,
          w: 4.3,
          h: 1.15,
          fontSize: 14,
          fontFace: FONT.body,
          color: theme.fg,
        });
        y += 1.25;
      }
      addQuote(slide, data.quote, theme, {
        x: 5.2,
        y: 3.6,
        w: 4.3,
        h: 1.7,
      });
      break;
    }

    case "bridge": {
      addIndex(slide, data, theme);
      slide.addText(headlineRuns(data.headline, theme, { fontSize: 28 }), {
        x: 0.5,
        y: 0.85,
        w: 9,
        h: 1.5,
      });
      slide.addText(data.bridgeLabel.toUpperCase(), {
        x: 0.5,
        y: 2.5,
        w: 9,
        h: 0.35,
        fontSize: 12,
        bold: true,
        fontFace: FONT.body,
        color: theme.fg,
      });
      const cardW = 2.8;
      data.steps.forEach((step, index) => {
        const x = 0.5 + index * (cardW + 0.35);
        slide.addShape("rect", {
          x,
          y: 3.0,
          w: cardW,
          h: 1.5,
          fill: { color: theme.quoteBg },
          line: { color: theme.quoteBg },
        });
        slide.addShape("rect", {
          x,
          y: 3.0,
          w: cardW,
          h: 0.08,
          fill: { color: theme.accent },
          line: { color: theme.accent },
        });
        slide.addText(step.step, {
          x: x + 0.2,
          y: 3.2,
          w: cardW - 0.4,
          h: 0.35,
          fontSize: 16,
          bold: true,
          fontFace: FONT.display,
          color: theme.accent,
        });
        slide.addText(step.title, {
          x: x + 0.2,
          y: 3.6,
          w: cardW - 0.4,
          h: 0.7,
          fontSize: 16,
          bold: true,
          fontFace: FONT.display,
          color: theme.fg,
        });
      });
      slide.addText(data.footnote, {
        x: 0.5,
        y: 4.8,
        w: 9,
        h: 0.7,
        fontSize: 13,
        fontFace: FONT.body,
        color: theme.muted,
      });
      break;
    }

    case "project": {
      addIndex(slide, data, theme);
      slide.addShape("rect", {
        x: 0.5,
        y: 0.95,
        w: 2.2,
        h: 0.35,
        fill: { color: COLORS.ink },
        line: { color: COLORS.ink },
      });
      slide.addText(data.tag.toUpperCase(), {
        x: 0.5,
        y: 0.95,
        w: 2.2,
        h: 0.35,
        fontSize: 11,
        bold: true,
        fontFace: FONT.display,
        color: COLORS.cream,
        align: "center",
        valign: "middle",
      });
      slide.addText(data.titleLines.join("\n"), {
        x: 0.5,
        y: 1.5,
        w: 9,
        h: 1.4,
        fontSize: 34,
        bold: true,
        fontFace: FONT.display,
        color: theme.fg,
      });
      slide.addText(data.lead, {
        x: 0.5,
        y: 3.1,
        w: 9,
        h: 0.8,
        fontSize: 15,
        fontFace: FONT.body,
        color: theme.fg,
      });
      slide.addText(data.promise, {
        x: 0.5,
        y: 4.0,
        w: 4.3,
        h: 1.4,
        fontSize: 14,
        fontFace: FONT.body,
        color: theme.fg,
      });
      addQuote(slide, data.quote, theme, {
        x: 5.1,
        y: 4.0,
        w: 4.4,
        h: 1.4,
      });
      break;
    }

    case "cards": {
      addIndex(slide, data, theme);
      slide.addText(headlineRuns(data.headline, theme, { fontSize: 28 }), {
        x: 0.5,
        y: 0.8,
        w: 9,
        h: 1.0,
      });
      let startY = 1.95;
      if (data.lead) {
        slide.addText(data.lead, {
          x: 0.5,
          y: 1.85,
          w: 9,
          h: 0.55,
          fontSize: 14,
          fontFace: FONT.body,
          color: theme.muted,
        });
        startY = 2.45;
      }
      const cols = data.cards.length > 4 ? 3 : Math.min(3, data.cards.length);
      const cardW = cols === 3 ? 2.95 : 4.4;
      const cardH = data.cards.length > 3 ? 1.35 : 1.6;
      data.cards.forEach((card, index) => {
        const col = index % cols;
        const row = Math.floor(index / cols);
        const x = 0.5 + col * (cardW + 0.2);
        const y = startY + row * (cardH + 0.15);
        const cardBg =
          theme.bg === COLORS.ink || theme.bg === COLORS.green
            ? theme.quoteBg
            : COLORS.white;
        slide.addShape("rect", {
          x,
          y,
          w: cardW,
          h: cardH,
          fill: { color: cardBg },
          line: { color: cardBg },
        });
        slide.addShape("rect", {
          x,
          y,
          w: cardW,
          h: 0.07,
          fill: { color: index % 2 ? COLORS.yellow : theme.accent },
          line: { color: index % 2 ? COLORS.yellow : theme.accent },
        });
        slide.addText(card.step ?? String(index + 1).padStart(2, "0"), {
          x: x + 0.15,
          y: y + 0.15,
          w: cardW - 0.3,
          h: 0.25,
          fontSize: 12,
          bold: true,
          fontFace: FONT.display,
          color: theme.accent,
        });
        slide.addText(card.title, {
          x: x + 0.15,
          y: y + 0.4,
          w: cardW - 0.3,
          h: 0.3,
          fontSize: 13,
          bold: true,
          fontFace: FONT.display,
          color: theme.fg,
        });
        slide.addText(card.text, {
          x: x + 0.15,
          y: y + 0.7,
          w: cardW - 0.3,
          h: cardH - 0.85,
          fontSize: 11,
          fontFace: FONT.body,
          color: theme.muted,
        });
      });
      break;
    }

    case "marketing": {
      addIndex(slide, data, theme);
      slide.addText(headlineRuns(data.headline, theme, { fontSize: 28 }), {
        x: 0.5,
        y: 0.85,
        w: 4.5,
        h: 1.8,
      });
      slide.addText(data.lead, {
        x: 0.5,
        y: 2.8,
        w: 4.5,
        h: 1.4,
        fontSize: 14,
        fontFace: FONT.body,
        color: theme.muted,
      });
      slide.addText(data.listLabel.toUpperCase(), {
        x: 5.3,
        y: 0.9,
        w: 4.2,
        h: 0.4,
        fontSize: 11,
        bold: true,
        fontFace: FONT.body,
        color: theme.fg,
      });
      slide.addText(
        data.list.map((item) => ({
          text: item,
          options: { bullet: true, breakLine: true },
        })),
        {
          x: 5.3,
          y: 1.4,
          w: 4.2,
          h: 2.4,
          fontSize: 14,
          fontFace: FONT.body,
          bold: true,
          color: theme.fg,
        },
      );
      addQuote(slide, data.quote, theme, {
        x: 5.3,
        y: 4.0,
        w: 4.2,
        h: 1.4,
      });
      break;
    }

    case "measurement": {
      addIndex(slide, data, theme);
      slide.addText(headlineRuns(data.headline, theme, { fontSize: 28 }), {
        x: 0.5,
        y: 0.85,
        w: 4.5,
        h: 1.2,
      });
      slide.addText(data.lead, {
        x: 0.5,
        y: 2.2,
        w: 4.5,
        h: 1.2,
        fontSize: 14,
        fontFace: FONT.body,
        color: theme.fg,
      });
      addQuote(slide, data.quote, theme, {
        x: 0.5,
        y: 3.6,
        w: 4.5,
        h: 1.7,
      });
      data.events.forEach((event, index) => {
        const col = index % 2;
        const row = Math.floor(index / 2);
        const x = 5.3 + col * 2.25;
        const y = 0.95 + row * 1.35;
        slide.addShape("rect", {
          x,
          y,
          w: 2.1,
          h: 1.15,
          fill: { color: COLORS.cream },
          line: { color: COLORS.cream },
        });
        slide.addShape("rect", {
          x,
          y,
          w: 0.08,
          h: 1.15,
          fill: { color: COLORS.green },
          line: { color: COLORS.green },
        });
        slide.addText(String(index + 1).padStart(2, "0"), {
          x: x + 0.2,
          y: y + 0.2,
          w: 1.7,
          h: 0.25,
          fontSize: 12,
          bold: true,
          fontFace: FONT.display,
          color: COLORS.green,
        });
        slide.addText(event, {
          x: x + 0.2,
          y: y + 0.5,
          w: 1.7,
          h: 0.5,
          fontSize: 12,
          bold: true,
          fontFace: FONT.body,
          color: COLORS.ink,
        });
      });
      break;
    }

    case "checklist": {
      addIndex(slide, data, theme);
      slide.addText(headlineRuns(data.headline, theme, { fontSize: 28 }), {
        x: 0.5,
        y: 0.85,
        w: 9,
        h: 1.0,
      });
      const mid = Math.ceil(data.items.length / 2);
      const left = data.items.slice(0, mid);
      const right = data.items.slice(mid);
      slide.addText(
        left.map((item) => ({
          text: item,
          options: { bullet: true, breakLine: true },
        })),
        {
          x: 0.5,
          y: 2.1,
          w: 4.5,
          h: 3.4,
          fontSize: 13,
          fontFace: FONT.body,
          bold: true,
          color: theme.fg,
        },
      );
      slide.addText(
        right.map((item) => ({
          text: item,
          options: { bullet: true, breakLine: true },
        })),
        {
          x: 5.2,
          y: 2.1,
          w: 4.5,
          h: 3.4,
          fontSize: 13,
          fontFace: FONT.body,
          bold: true,
          color: theme.fg,
        },
      );
      break;
    }

    case "timeline": {
      addIndex(slide, data, theme);
      slide.addText(data.bigNumber, {
        x: 0.5,
        y: 1.3,
        w: 9,
        h: 1.8,
        fontSize: 96,
        bold: true,
        fontFace: FONT.display,
        color: theme.fg,
      });
      slide.addText(data.title.toUpperCase(), {
        x: 0.5,
        y: 3.2,
        w: 9,
        h: 0.5,
        fontSize: 28,
        bold: true,
        fontFace: FONT.display,
        color: theme.fg,
      });
      slide.addText(data.lead, {
        x: 0.5,
        y: 3.9,
        w: 8.5,
        h: 1.3,
        fontSize: 15,
        fontFace: FONT.body,
        color: theme.fg,
      });
      break;
    }

    case "investment": {
      addIndex(slide, data, theme);
      slide.addShape("rect", {
        x: 0.5,
        y: 0.95,
        w: 3.4,
        h: 0.35,
        fill: { color: COLORS.yellow },
        line: { color: COLORS.yellow },
      });
      slide.addText(data.tag.toUpperCase(), {
        x: 0.5,
        y: 0.95,
        w: 3.4,
        h: 0.35,
        fontSize: 11,
        bold: true,
        fontFace: FONT.display,
        color: COLORS.ink,
        align: "center",
        valign: "middle",
      });
      slide.addText(
        [
          {
            text: `${data.currency} `,
            options: {
              color: COLORS.cream,
              fontSize: 54,
              bold: true,
              fontFace: FONT.display,
            },
          },
          {
            text: data.amount,
            options: {
              color: COLORS.yellow,
              fontSize: 54,
              bold: true,
              fontFace: FONT.display,
            },
          },
        ],
        { x: 0.5, y: 1.5, w: 9, h: 1.2 },
      );
      slide.addText(data.lead, {
        x: 0.5,
        y: 2.9,
        w: 9,
        h: 1.0,
        fontSize: 15,
        fontFace: FONT.body,
        color: theme.muted,
      });
      slide.addShape("rect", {
        x: 0.5,
        y: 4.1,
        w: 6.5,
        h: 1.3,
        fill: { color: theme.quoteBg },
        line: { color: theme.quoteBg },
      });
      slide.addShape("rect", {
        x: 0.5,
        y: 4.1,
        w: 6.5,
        h: 0.08,
        fill: { color: COLORS.yellow },
        line: { color: COLORS.yellow },
      });
      slide.addText(data.paymentLabel.toUpperCase(), {
        x: 0.7,
        y: 4.25,
        w: 6,
        h: 0.3,
        fontSize: 11,
        bold: true,
        fontFace: FONT.body,
        color: COLORS.yellow,
      });
      slide.addText(
        data.paymentTerms.flatMap((term, index) => [
          {
            text: term.amount,
            options: {
              fontFace: FONT.display,
              bold: true,
              color: COLORS.yellow,
              fontSize: 18,
            },
          },
          {
            text: ` ${term.description}${index < data.paymentTerms.length - 1 ? "\n" : ""}`,
            options: {
              fontFace: FONT.body,
              color: COLORS.cream,
              fontSize: 14,
            },
          },
        ]),
        {
          x: 0.7,
          y: 4.55,
          w: 6,
          h: 0.7,
        },
      );
      break;
    }

    case "scale": {
      addIndex(slide, data, theme);
      slide.addText(headlineRuns(data.headline, theme, { fontSize: 26 }), {
        x: 0.5,
        y: 0.85,
        w: 5.2,
        h: 1.6,
      });
      slide.addText(data.lead, {
        x: 0.5,
        y: 2.6,
        w: 5.2,
        h: 1.2,
        fontSize: 14,
        fontFace: FONT.body,
        color: theme.fg,
      });
      slide.addShape("rect", {
        x: 0.5,
        y: 4.0,
        w: 5.2,
        h: 1.4,
        fill: { color: COLORS.cream },
        line: { color: COLORS.cream },
      });
      slide.addShape("rect", {
        x: 0.5,
        y: 4.0,
        w: 0.08,
        h: 1.4,
        fill: { color: COLORS.green },
        line: { color: COLORS.green },
      });
      slide.addText(data.priceLabel.toUpperCase(), {
        x: 0.75,
        y: 4.15,
        w: 4.7,
        h: 0.25,
        fontSize: 11,
        bold: true,
        fontFace: FONT.body,
        color: COLORS.green,
      });
      slide.addText(
        `${data.pricePrefix} ${data.priceAmount} ${data.priceSuffix}`,
        {
          x: 0.75,
          y: 4.4,
          w: 4.7,
          h: 0.4,
          fontSize: 18,
          bold: true,
          fontFace: FONT.display,
          color: COLORS.ink,
        },
      );
      slide.addText(data.priceNote, {
        x: 0.75,
        y: 4.85,
        w: 4.7,
        h: 0.4,
        fontSize: 11,
        fontFace: FONT.body,
        color: "666666",
      });
      slide.addText(
        data.uses.map((item) => ({
          text: item,
          options: { bullet: true, breakLine: true },
        })),
        {
          x: 6.0,
          y: 1.0,
          w: 3.5,
          h: 4.4,
          fontSize: 15,
          fontFace: FONT.body,
          bold: true,
          color: theme.fg,
        },
      );
      break;
    }

    default: {
      const _exhaustive: never = data;
      return _exhaustive;
    }
  }
}

export function createProposalPptx(): PptxGenJS {
  const pptx = new PptxGenJS();
  pptx.defineLayout({ name: "WIDESCREEN_16x9", width: 10, height: 5.625 });
  pptx.layout = "WIDESCREEN_16x9";
  pptx.author = propostaMeta.brand.left;
  pptx.title = propostaMeta.title;
  pptx.subject = propostaMeta.description;

  for (const slide of proposalSlides) {
    buildSlide(pptx, slide);
  }

  return pptx;
}

export async function downloadProposalPptx(): Promise<void> {
  const pptx = createProposalPptx();
  await pptx.writeFile({ fileName: PPTX_FILENAME });
}

export async function buildProposalPptxBuffer(): Promise<Buffer> {
  const pptx = createProposalPptx();
  const output = await pptx.write({ outputType: "nodebuffer" });
  return Buffer.from(output as ArrayBuffer | Uint8Array | Buffer);
}

export function proposalSlidePlainText(slide: ProposalSlide): string {
  switch (slide.layout) {
    case "cover":
    case "close":
      return `${renderTextParts(slide.headline)} ${slide.lead}`;
    case "split-copy":
      return `${renderTextParts(slide.headline)} ${slide.paragraphs.join(" ")} ${slide.quote}`;
    case "bridge":
      return `${renderTextParts(slide.headline)} ${slide.footnote}`;
    case "project":
      return `${slide.titleLines.join(" ")} ${slide.lead}`;
    case "cards":
      return `${renderTextParts(slide.headline)} ${slide.cards.map((c) => c.title).join(" ")}`;
    case "marketing":
      return `${renderTextParts(slide.headline)} ${slide.lead}`;
    case "measurement":
      return `${renderTextParts(slide.headline)} ${slide.events.join(" ")}`;
    case "checklist":
      return `${renderTextParts(slide.headline)} ${slide.items.join(" ")}`;
    case "timeline":
      return `${slide.bigNumber} ${slide.title} ${slide.lead}`;
    case "investment":
      return `${slide.currency} ${slide.amount} ${slide.lead}`;
    case "scale":
      return `${renderTextParts(slide.headline)} ${slide.priceAmount}`;
    default: {
      const _exhaustive: never = slide;
      return _exhaustive;
    }
  }
}
