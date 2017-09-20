# atl-interface-test

Build with `npm install && npm run build`

Expectation is that every .ts file will generate a corresponding .d.ts file.

Actual results: MyInterface.d.ts is not generated.

To force awesome-typescript-loader to generate a description file for the interface TypeScript files, it's necessary to:

* export a const from the interface.ts file
* import the const in index.ts
* use the exported const by assigning to a variable in index.ts
