// make.fun ai-joke-02 entry: writes a single one-liner about AI coding agents.
// Node 22, standard library only, deterministic, no network.
// Local runs: MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const JOKE =
  "My agent's tests are thorough: they mock the database, the network, the clock and, finally, the function under test.";

const dir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, 'entry.txt'), JOKE, 'utf8');
