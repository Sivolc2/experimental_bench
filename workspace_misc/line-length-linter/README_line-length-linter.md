# Line Length Linter - Project Context

## Project Structure
- `src/extension.ts`: Main extension file that registers diagnostics and event handlers
- `src/test/`: Contains test files and runners
- `.vscode/`: Contains VS Code launch and task configurations
- `.vscodeignore`: Controls which files are included in the final package

## Key Functions
- `activate(ctx)`: Entry point that initializes the linter
- `check(doc)`: Evaluates a document's line count and sets diagnostics
- `deactivate()`: Clean-up function (currently empty)

## Data Architecture
- Uses VS Code's diagnostic collection API to store and display warnings
- Configuration stored in VS Code's workspace configuration

## Environment
- Uses Python virtual environment (venv) for dependency isolation
- TypeScript compilation generates JavaScript in the `out/` directory

## Build and Test
- Run `npm run compile` to compile the TypeScript code
- Run `npm run package` to create a VSIX file for distribution (only ~5KB in size)
- Run `npm test` to run tests (currently has issues with test runner)

## Compilation Fixes
- Added `skipLibCheck: true` to tsconfig.json to resolve TypeScript dependency errors
- Updated the glob API usage in test suite to use Promises instead of callbacks
- Fixed test paths to properly locate compiled JavaScript files
- Added test files to exclude list in tsconfig.json to prevent compilation errors

## Packaging Improvements
- Added repository field to package.json
- Created LICENSE file (MIT license)
- Configured .vscodeignore to include only essential files in the package
- Reduced package size from 14.5MB to ~5KB

## Test Files
- `test-long-file.ts`: A sample file with more than 300 lines to test the linter

## Design Differences
- The implementation follows the guide but adds:
  - Virtual environment for better dependency management
  - More organized test structure
  - Improved documentation and README
  - Clearer configuration options

## Configuration Options
- `lineLengthLinter.maxLines`: Maximum line count before warning (default: 300)

## Usage
1. Install the extension using the VSIX package
2. Open a file with more than 300 lines
3. A warning will appear in the Problems panel
4. Configure the line limit in settings.json with `lineLengthLinter.maxLines` 