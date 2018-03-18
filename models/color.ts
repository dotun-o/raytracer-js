class Color {
    r: number;
    g: number;
    b: number;

    constructor(r: number, g: number, b: number) {
        // never exceed 1.0
        this.r = r > 1.0 ? 1.0 : r;
        this.g = g > 1.0 ? 1.0 : g;
        this.b = b > 1.0 ? 1.0 : b;
    }

    static scale(m: number, c: Color) {
        return new Color(m * c.r, m * c.g, m * c.b);
    }

    static WHITE = new Color(1.0, 1.0, 1.0);
    static GRAY = new Color(0.5, 0.5, 0.5);
    static BLACK = new Color(0.0, 0.0, 0.0);
    static BACKGROUND = Color.BLACK;
    static FOREGROUND = Color.WHITE;
}
