/**
 * Restores `selection.transition()` for mermaid.
 *
 * mermaid imports `select` from the `d3` umbrella package, and `d3@7` declares
 * `"sideEffects": false`. Webpack therefore tree-shakes the barrel down to the
 * `d3-selection` export that is actually referenced, and d3-transition — whose
 * only job is to patch `selection.prototype.transition` as a side effect — is
 * dropped from the bundle.
 *
 * mermaid's flowchart tooltip handler (setupToolTips) calls
 * `tooltipElem.transition()` on hover, so without the patch every flowchart
 * throws "tooltipElem.transition is not a function" as soon as the pointer
 * enters or leaves a node.
 *
 * Importing the package for its side effect here puts the patch back. It is a
 * direct dependency so it survives tree-shaking (`"sideEffects": true`), and it
 * patches the same d3-selection instance mermaid resolves.
 */
import 'd3-transition';
