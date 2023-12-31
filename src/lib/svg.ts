


export class SVGMaker {

    public readonly svg: HTMLElement;

    constructor(width: string | number, height: string | number) {
        this.svg = document.createElement('svg');
        this.svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        this.svg.setAttribute('width', `${width}`);
        this.svg.setAttribute('height', `${height}`);
    }

    public addText(options: {
        x: number;
        y: number;
        text: string;
        fill?: string;
        fontFamily?: string;
        fontSize?: string;
        fontWeight?: string;
        textAnchor?: string;
        alignmentBaseline?: string;
    }): HTMLElement {
        const text = document.createElement('text');
        text.setAttribute('x', `${options.x}`);
        text.setAttribute('y', `${options.y}`);
        text.innerText = options.text;
        if(options.fill) text.setAttribute('fill', options.fill);
        if(options.fontFamily) text.setAttribute('font-family', options.fontFamily);
        if(options.fontSize) text.setAttribute('font-size', options.fontSize);
        if(options.fontWeight) text.setAttribute('font-weight', options.fontWeight);
        if(options.textAnchor) text.setAttribute('text-anchor', options.textAnchor);
        if(options.alignmentBaseline) text.setAttribute('alignment-baseline', options.alignmentBaseline);
        
        return this.svg.appendChild(text);
    }

}


