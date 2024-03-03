interface HighlightedContentParams {
    brandName?: string;
    content: string;
}

const replacePhraseInString = (phrase: string, replacement: string, inputString: string): string => {
    const regex = new RegExp(phrase, 'g');
    return inputString.replace(regex, replacement);
};

export const getFooterDescriptionHtml = ({ brandName, content }: HighlightedContentParams): string => {
    if (!brandName) {
        return content;
    }

    return replacePhraseInString(brandName, `<strong>${brandName}</strong>`, content);
};
