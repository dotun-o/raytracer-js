class Color {
    r: number;
    g: number;
    b: number;
    a: number;

    constructor(r: number = 0, g: number = 0, b: number = 0, a: number = 0) {
        const {normalizedR, normalizedG, normalizedB, normalizedA} = this.normalize(r, g, b, a);
        this.r = normalizedR;
        this.g = normalizedG;
        this.b = normalizedB;
        this.a = normalizedA;
    }
    
    normalize(r: number = 0, g: number = 0, b: number = 0, a: number = 0) {
        let normalizedR = 0, normalizedG = 0, normalizedB = 0, normalizedA = 0;
        
        normalizedR = r < 0 ? 0 : r;
        normalizedR = r > 1 ? 1 : normalizedR;
        
        normalizedG = g < 0 ? 0 : g;
        normalizedG = g > 1 ? 1 : normalizedG;
        
        normalizedB = b < 0 ? 0 : b;
        normalizedB = b > 1 ? 1 : normalizedB;
        
        normalizedA = a < 0 ? 0 : a;
        normalizedA = a > 1 ? 1 : normalizedA;
        
        return {normalizedR, normalizedG, normalizedB, normalizedA};
    }

    static scale(n: number, c: Color) {
        return new Color(n * c.r, n * c.g, n * c.b, n * c.a);
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
        };
    }
    
    static toBit16(c: Color) {
        return {
            r: Math.floor(c.r * 15),
            g: Math.floor(c.g * 15),
            b: Math.floor(c.b * 15),
            a: Math.floor(c.a * 15)
        };
    }
    
    static toBit24(c: Color) {
        // no alpha channel
        return {
            r: Math.floor(c.r * 255),
            g: Math.floor(c.g * 255),
            b: Math.floor(c.b * 255)
        };
    }
    
    static toBit32(c: Color) {
        return {
            r: Math.floor(c.r * 255),
            g: Math.floor(c.g * 255),
            b: Math.floor(c.b * 255),
            a: Math.floor(c.a * 255)
        };
    }

    // presets
    static WHITE = new Color(1.0, 1.0, 1.0);
    static GRAY = new Color(0.5, 0.5, 0.5);
    static BLACK = new Color(0.0, 0.0, 0.0);
    static BACKGROUND = Color.BLACK;
    static FOREGROUND = Color.WHITE;
}
