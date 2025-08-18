var fname = "Jon Doe"; // var can be redeclared, reassigned accessible globally.

let fatherName = "Doe"; // let can reassigned and cannot be redeclared accessible only in block-scope.

const email = "Doe@gmail.com" //const cannot be redeclared,reassigned similar to let variable.


console.table([fname,fatherName,email])




/*  
 | Feature       | `var` (old)                   | `let` (modern)                              | `const` (modern)                                 |
| ------------- | ----------------------------- | ------------------------------------------- | ------------------------------------------------ |
| **Scope**     | Function-scoped               | Block-scoped `{ ... }`                      | Block-scoped `{ ... }`                           |
| **Redeclare** | ✅ Allowed                     | ❌ Not allowed                               | ❌ Not allowed                                    |
| **Reassign**  | ✅ Allowed                     | ✅ Allowed                                   | ❌ Not allowed (except objects/arrays can mutate) |
| **Hoisting**  | Hoisted (value = `undefined`) | Hoisted (but not usable before declaration) | Same as `let` 
                                   |
 */