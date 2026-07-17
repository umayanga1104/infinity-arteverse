export const viewportHorizontalProgress = (element) => {
    const rect = element.getBoundingClientRect();
    const leftBound = window.innerWidth * 0.15;
    const rightBound = window.innerWidth * 0.95;

    return (rect.left >= leftBound && rect.right <= rightBound)? true: false;
}

export const viewportVerticalProgress = (element) => {
    const rect = element.getBoundingClientRect();
    const topBound = window.innerHeight * 0.05;
    const bottomBound = window.innerHeight * 0.95;

    return (rect.top >= topBound && rect.bottom <= bottomBound)? true: false;
}