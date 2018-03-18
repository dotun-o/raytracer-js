class Color {
    r: number;
    g: number;
    b: number;

    constructor(r: number, g: number, b: number) {
        this.r = r > 1 ? 1 : r;
        this.g = g > 1 ? 1 : g;
        this.b = b > 1 ? 1 : b;
    }

    static scale(m: number, c: Color) {
        return new Color(m * c.r, m * c.g, m * c.b);
    }

    static WHITE = new Color(1.0, 1.0, 1.0);
    static GRAY = new Color(0.5, 0.5, 0.5);
    static BLACK = new Color(0.0, 0.0, 0.0);
}
