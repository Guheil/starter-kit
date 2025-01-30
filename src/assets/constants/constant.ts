//COLORS
export const COLORS:Record<string,string> = {
    primary: "#0c58bb",
    secondary:"#FFD700",
    white:"#F5EFE7",
    black: "#000000",
    gray:"#CCCCCC"
}as const;

//FONT SIZES
export const FONT_SIZE:Record<string,number> ={
    small:11,
    medium: 13,
    large:20,
    extraLarge:24,
} as const;

//FONTS
export const FONTS: Record<string,string> ={
    regular: 'OpenSans-Regular',
    light: 'OpenSans-Light',
    semibold:'OpenSans-Semibold',
    bold: 'OpenSans-Bold'
} as const;