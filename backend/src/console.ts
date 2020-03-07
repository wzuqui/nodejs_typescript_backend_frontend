
export const Colors = {
    Bright: (string: unknown) => `\x1b[1m${string}\x1b[0m`,
    Dim: (string: unknown) => `\x1b[2m${string}\x1b[0m`,
    Underscore: (string: unknown) => `\x1b[4m${string}\x1b[0m`,
    Blink: (string: unknown) => `\x1b[5m${string}\x1b[0m`,
    Reverse: (string: unknown) => `\x1b[7m${string}\x1b[0m`,
    Hidden: (string: unknown) => `\x1b[8m${string}\x1b[0m`,

    FgBlack: (string: unknown) => `\x1b[30m${string}\x1b[0m`,
    FgRed: (string: unknown) => `\x1b[31m${string}\x1b[0m`,
    FgGreen: (string: unknown) => `\x1b[32m${string}\x1b[0m`,
    FgYellow: (string: unknown) => `\x1b[33m${string}\x1b[0m`,
    FgBlue: (string: unknown) => `\x1b[34m${string}\x1b[0m`,
    FgMagenta: (string: unknown) => `\x1b[35m${string}\x1b[0m`,
    FgCyan: (string: unknown) => `\x1b[36m${string}\x1b[0m`,
    FgWhite: (string: unknown) => `\x1b[37m${string}\x1b[0m`,

    BgBlack: (string: unknown) => `\x1b[40m${string}\x1b[0m`,
    BgRed: (string: unknown) => `\x1b[41m${string}\x1b[0m`,
    BgGreen: (string: unknown) => `\x1b[42m${string}\x1b[0m`,
    BgYellow: (string: unknown) => `\x1b[43m${string}\x1b[0m`,
    BgBlue: (string: unknown) => `\x1b[44m${string}\x1b[0m`,
    BgMagenta: (string: unknown) => `\x1b[45m${string}\x1b[0m`,
    BgCyan: (string: unknown) => `\x1b[46m${string}\x1b[0m`,
    BgWhite: (string: unknown) => `\x1b[47m${string}\x1b[0m`,
}