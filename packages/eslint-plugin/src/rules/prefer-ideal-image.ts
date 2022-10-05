/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {createRule} from '../util';
import type {TSESTree} from '@typescript-eslint/types/dist/ts-estree';

type Options = [];
type MessageIds = 'useIdealImagePlugin';

export default createRule<Options, MessageIds>({
  name: 'prefer-ideal-image',
  meta: {
    type: 'suggestion',
    docs: {
      description:
        'enforce using Docusaurus `plugin-ideal-image` instead of `<img>` tag',
      recommended: false,
    },
    schema: [],
    messages: {
      useIdealImagePlugin:
        'Prefer using the `@theme/IdealImage` plugin instead of <img> tags.',
    },
  },
  defaultOptions: [],
  create(context) {
    return {
      JSXElement(node) {
        if (
          (node.openingElement.name as TSESTree.JSXIdentifier).name === 'Image'
        ) {
          return;
        }
        if (
          (node.openingElement.name as TSESTree.JSXIdentifier).name === 'img'
        ) {
          context.report({node, messageId: 'useIdealImagePlugin'});
        }
      },
    };
  },
});
