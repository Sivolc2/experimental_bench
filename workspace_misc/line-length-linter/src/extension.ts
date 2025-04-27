import * as vscode from 'vscode';

const DEFAULT_MAX_LINES = 300;
const WATCHED_EXTENSIONS = ['.ts', '.tsx', '.js', '.jsx', '.py'];

export function activate(ctx: vscode.ExtensionContext) {
  const diagnostics = vscode.languages.createDiagnosticCollection('lineLength');
  ctx.subscriptions.push(diagnostics);

  const check = (doc: vscode.TextDocument) => {
    const ext = doc.uri.fsPath.replace(/^.*(\.[^.]*)$/, '$1');
    if (!WATCHED_EXTENSIONS.includes(ext)) {
      diagnostics.delete(doc.uri);
      return;
    }

    const max = vscode.workspace
      .getConfiguration('lineLengthLinter')
      .get<number>('maxLines', DEFAULT_MAX_LINES);

    const items: vscode.Diagnostic[] = [];
    if (doc.lineCount > max) {
      // mark the whole file – one Diagnostic spanning everything
      const range = new vscode.Range(
        0,
        0,
        doc.lineCount - 1,
        doc.lineAt(doc.lineCount - 1).range.end.character,
      );
      items.push(
        new vscode.Diagnostic(
          range,
          `File has ${doc.lineCount} lines (limit: ${max}).`,
          vscode.DiagnosticSeverity.Warning,
        ),
      );
    }
    diagnostics.set(doc.uri, items);
  };

  ctx.subscriptions.push(
    vscode.workspace.onDidOpenTextDocument(check),
    vscode.workspace.onDidSaveTextDocument(check),
  );

  vscode.workspace.textDocuments.forEach(check); // initial pass
}

export function deactivate() {} 