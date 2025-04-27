import * as assert from 'assert';
import * as vscode from 'vscode';

suite('Extension Test Suite', () => {
  test('Extension should be present', () => {
    assert.ok(vscode.extensions.getExtension('cloviz.line-length-linter'));
  });

  test('Extension should activate', async () => {
    const extension = vscode.extensions.getExtension('cloviz.line-length-linter');
    if (!extension) {
      assert.fail('Extension not found');
      return;
    }
    await extension.activate();
    assert.equal(extension.isActive, true);
  });
}); 