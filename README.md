# experimental_bench
Area to test different functions before integration into generative development workflow

# Line Length Linter

A VS Code extension that warns about files with excessive line counts.

## Features

- Displays warnings for files exceeding a configurable line count (default: 300 lines)
- Scans JavaScript, TypeScript, and Python files
- Marks issues directly in the editor and in the Problems panel
- Updates in real-time when files are opened or saved

## Installation

### From VSIX

1. Download the `.vsix` file from the releases
2. In VS Code, go to Extensions tab
3. Click the "..." menu and select "Install from VSIX..."
4. Select the downloaded file

### From Source

1. Clone this repository
2. Run `npm install` to install dependencies
3. Activate the Python virtual environment: `source venv/bin/activate`
4. Run `npm run compile` to build the extension
5. Press F5 in VS Code to run the extension in debug mode

## Configuration

This extension contributes the following settings:

- `lineLengthLinter.maxLines`: Maximum allowed lines before a warning is shown (default: 300)

## Development

### Building

```bash
npm run compile
```

### Packaging

```bash
npm run package
```

This will create a `.vsix` file you can install in VS Code.

### Testing

```bash
npm test
```

## Design Differences

This implementation follows the guide closely with these differences:
- Added a Python virtual environment for dependency isolation
- Improved the test structure with proper TypeScript configurations
- Added more detailed documentation

## Architecture

- `extension.ts`: Main entry point that registers the diagnostic collection and document event handlers
- `Constants`: Contains the default line limit (300) and watched file extensions (.ts, .js, .py, etc.)
- `Test Suite`: Basic tests to verify the extension loads and activates correctly

## License

ISC
