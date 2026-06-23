import { describe, it, expect} from "vitest";
import { buildGreeting } from "../src/greet.js";

describe('buildGreeting', () => {
    it('greets the given name', () => {
        expect(buildGreeting('World')).toBe('Hello, World!');
    });

    it('greets the default name when no name is given', () => {
        expect(buildGreeting('CLI')).toBe('Hello, CLI!');
    });
})
