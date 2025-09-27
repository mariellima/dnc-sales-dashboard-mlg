import '@testing-library/jest-dom'
import 'jest-styled-components'
// jest.setup.ts
import { TextEncoder, TextDecoder } from 'node:util';

Object.assign(global, {
  TextEncoder,
  TextDecoder,
});