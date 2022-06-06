/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {createRule} from '../util';
import type {TSESTree} from '@typescript-eslint/types/dist/ts-estree';

type Options = [];
type MessageIds = 'useLinkTag';

export default createRule<Options, MessageIds>({
  name: 'prefer-docusaurus-link',
  meta: {
    type: 'suggestion',
    docs: {
      description: 'enforce use of <Link> tag',
      recommended: false,
    },
    schema: [],
    messages: {
      useLinkTag: 'use <Link> instead of <a>.',
    },
  },
  defaultOptions: [],
  create(context) {
    return {
      JSXElement(node) {
        if (
          (node.openingElement.name as TSESTree.JSXIdentifier).name === 'Link'
        ) {
          return;
        }
        if ((node.openingElement.name as TSESTree.JSXIdentifier).name === 'a') {
          context.report({node, messageId: 'useLinkTag'});
        }
      },
    };
  },
});
