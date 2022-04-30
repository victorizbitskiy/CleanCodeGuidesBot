## **Formatting**

Formatting is subjective. Like many rules herein, there is no hard and fast rule that you must follow. The main point is DO NOT ARGUE over formatting. There are tons of tools to automate this. Use one! It's a waste of time and money for engineers to argue over formatting.

For things that don't fall under the purview of automatic formatting \(indentation, tabs vs. spaces, double vs. single quotes, etc.\) look here for some guidance.

### Function callers and callees should be close

If a function calls another, keep those functions vertically close in the source file. Ideally, keep the caller right above the callee. We tend to read code from top-to-bottom, like a newspaper. Because of this, make your code read that way.