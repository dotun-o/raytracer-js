class Color {
    r: number;
    g: number;
    b: number;
    a: number

    constructor(r: number, g: number, b: number, a: number = 0) {
        // never drop below 0.0
        this.r = r < 0.0 ? 0.0 : r;
        this.g = g < 0.0 ? 0.0 : g;
        this.b = b < 0.0 ? 0.0 : b;
        this.a = a < 0.0 ? 0.0 : a;
        
        // never exceed 1.0
        // compare to self, not to r,g,b again,
        // or values could be set back below 0.0!
        this.r = this.r > 1.0 ? 1.0 : this.r;
        this.g = this.g > 1.0 ? 1.0 : this.g;
        this.b = this.b > 1.0 ? 1.0 : this.b;
        this.a = this.a > 1.0 ? 1.0 : this.a;
    }

    static scale(n: number, c: Color) {
        return new Color(n * c.r, n * c.g, n * c.b, c.a);
    }
    
    static multiply(c1: Color, c2: Color) {
        return new Color(c1.r * c2.r, c1.g * c2.g, c1.b * c2.b, c1.a * c2.a);
    }
    
    static divide(c1: Color, c2: Color) {
        return new Color(c1.r / c2.r, c1.g / c2.g, c1.b / c2.b, c1.a / c2.a);
    }
    
    static add(c1: Color, c2: Color) {
        return new Color(c1.r + c2.r, c1.g + c2.g, c1.b + c2.b, c1.a + c2.a);
    }
    
    static subtract(c1: Color, c2: Color) {
        return new Color(c1.r - c2.r, c1.g - c2.g, c1.b - c2.b, c1.a - c2.a);
    }
    
    static toBit8(c: Color) {
        // no alpha channel
        return {
            r: Math.floor(c.r * 7),
            g: Math.floor(c.g * 7),
            b: Math.floor(c.b * 3)
        }
    }
    
    static toBit16(c: Color) {
        return {
            r: Math.floor(c.r * 15),
            g: Math.floor(c.g * 15),
            b: Math.floor(c.b * 15),
            a: Math.floor(c.a * 15)
        }
    }
    
    static toBit24(c: Color) {
        // no alpha channel
        return {
            r: Math.floor(c.r * 255),
            g: Math.floor(c.g * 255),
            b: Math.floor(c.b * 255)
        }
    }
    
    static toBit32(c: Color) {
        return {
            r: Math.floor(c.r * 255),
            g: Math.floor(c.g * 255),
            b: Math.floor(c.b * 255)
            a: Math.floor(c.a * 255)
        }
    }

    // presets
    static WHITE = new Color(1.0, 1.0, 1.0);
    static GRAY = new Color(0.5, 0.5, 0.5);
    static BLACK = new Color(0.0, 0.0, 0.0);
    static BACKGROUND = Color.BLACK;
    static FOREGROUND = Color.WHITE;
}
