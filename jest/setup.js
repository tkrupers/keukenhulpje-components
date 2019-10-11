import { createSerializer, matchers } from 'jest-emotion';
import * as emotion from '@emotion/core';

// Add the custom matchers provided by 'jest-emotion'
expect.extend(matchers);
expect.addSnapshotSerializer(createSerializer(emotion));
