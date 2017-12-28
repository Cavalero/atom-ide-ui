'use strict';

var _DiagnosticsMessageText;

function _load_DiagnosticsMessageText() {
  return _DiagnosticsMessageText = require('../lib/ui/DiagnosticsMessageText');
}

describe('DiagnosticsMessageText', () => {
  it('should leave text unchanged', () => {
    expect((0, (_DiagnosticsMessageText || _load_DiagnosticsMessageText()).separateUrls)('hello')).toEqual([{ isUrl: false, text: 'hello' }]);
  });

  it('should handle a lone URL', () => {
    expect((0, (_DiagnosticsMessageText || _load_DiagnosticsMessageText()).separateUrls)('http://example.com')).toEqual([{ isUrl: false, text: '' }, { isUrl: true, url: 'http://example.com' }, { isUrl: false, text: '' }]);
  });

  it('should separate URLs', () => {
    expect((0, (_DiagnosticsMessageText || _load_DiagnosticsMessageText()).separateUrls)('foo https://example.com/short-link bar https://example.com/abc_def0 baz')).toEqual([{ isUrl: false, text: 'foo ' }, { isUrl: true, url: 'https://example.com/short-link' }, { isUrl: false, text: ' bar ' }, { isUrl: true, url: 'https://example.com/abc_def0' }, { isUrl: false, text: ' baz' }]);
  });

  it('should handle URLs at the beginning', () => {
    expect((0, (_DiagnosticsMessageText || _load_DiagnosticsMessageText()).separateUrls)('https://example.com/123 end')).toEqual([{ isUrl: false, text: '' }, { isUrl: true, url: 'https://example.com/123' }, { isUrl: false, text: ' end' }]);
  });

  it('should handle URLs at the end', () => {
    expect((0, (_DiagnosticsMessageText || _load_DiagnosticsMessageText()).separateUrls)('beginning https://example.com/foo.html')).toEqual([{ isUrl: false, text: 'beginning ' }, { isUrl: true, url: 'https://example.com/foo.html' }, { isUrl: false, text: '' }]);
  });

  it('should not include trailing periods in URLs', () => {
    expect((0, (_DiagnosticsMessageText || _load_DiagnosticsMessageText()).separateUrls)('hello https://example.com/short-link.')).toEqual([{ isUrl: false, text: 'hello ' }, { isUrl: true, url: 'https://example.com/short-link' }, { isUrl: false, text: '.' }]);
  });

  it('should handle URLs that include escaped characters', () => {
    expect((0, (_DiagnosticsMessageText || _load_DiagnosticsMessageText()).separateUrls)('https://example.com/give%20me%20some%20space/')).toEqual([{ isUrl: false, text: '' }, { isUrl: true, url: 'https://example.com/give%20me%20some%20space/' }, { isUrl: false, text: '' }]);
  });
}); /**
     * Copyright (c) 2017-present, Facebook, Inc.
     * All rights reserved.
     *
     * This source code is licensed under the BSD-style license found in the
     * LICENSE file in the root directory of this source tree. An additional grant
     * of patent rights can be found in the PATENTS file in the same directory.
     *
     * 
     * @format
     */