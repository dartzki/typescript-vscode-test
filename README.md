# typescript-vscode-test

## execute
- clone project
- `npm install`
- `jspm install`
- `typings install`
- open vscode
- open project folder
- open main.spec.ts
- vscode reports error on line 23
    - `alwaysTrue()` is defined in `customMatchers.d.ts`
    - error is resolved if capital M is removed from filename
