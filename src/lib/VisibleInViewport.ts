import type { Action } from "svelte/action";

/** Once element is in view port, add .visible class */
export const VisibleInViewport: Action<HTMLElement, {
    margin?: string;
    thresholds?: number | number[];
} | undefined> = (node, options={}) => {

    const observer = new IntersectionObserver(intersections => {
        intersections.forEach(intersection => {
            if(intersection.target != node) return;

            if(intersection.isIntersecting) {
                node.classList.add('visible');
                observer.unobserve(node);
            }
        });
    }, {
        rootMargin: options.margin,
        threshold: options.thresholds
    });

    observer.observe(node);

    return {
        destroy() {
            observer.disconnect();
        }
    }

}
