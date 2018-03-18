class Color {
    r: number;
    g: number;
    b: number;

    constructor(r: number, g: number, b: number) {
        // never drop below 0.0
        this.r = r < 0.0 ? 0.0 : r;
        this.g = g < 0.0 ? 0.0 : g;
        this.b = b < 0.0 ? 0.0 : b;
        
        // never exceed 1.0
        // compare to self, not to r,g,b again,
        // or values could be set back below 0.0!
        this.r = this.r > 1.0 ? 1.0 : this.r;
        this.g = this.g > 1.0 ? 1.0 : this.g;
        this.b = this.b > 1.0 ? 1.0 : this.b;
    }

    static scale(n: number, c: Color) {
        return new Color(n * c.r, n * c.g, n * c.b);
    }
    
    static multiply(c1: Color, c2: Color) {
        return new Color(c1.r * c2.r, c1.g * c2.g, c1.b * c2.b);
    }
    
    static divide(c1: Color, c2: Color) {
        return new Color(c1.r / c2.r, c1.g / c2.g, c1.b / c2.b);
    }
    
    static add(c1: Color, c2: Color) {
        return new Color(c1.r + c2.r, c1.g + c2.g, c1.b + c2.b);
    }
    
    static subtract(c1: Color, c2: Color) {
        return new Color(c1.r - c2.r, c1.g - c2.g, c1.b - c2.b);
    }

    static WHITE = new Color(1.0, 1.0, 1.0);
    static GRAY = new Color(0.5, 0.5, 0.5);
    static BLACK = new Color(0.0, 0.0, 0.0);
    static BACKGROUND = Color.BLACK;
    static FOREGROUND = Color.WHITE;
}
