export function buildGreeting(name: string, upper: boolean = false): string {
    let greeting = `Hello, ${name}!`;
    return upper ? greeting.toUpperCase() : greeting;
}
