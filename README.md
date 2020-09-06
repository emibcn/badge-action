# Badge action

This action generates a SVG badge using GitHub Actions and GitHub Workflow CPU time (no 3rd parties servers). The badge is generated using the NPM package [gradient-badge](https://github.com/bokub/gradient-badge).

## Inputs

### `label`

**Required** The left label of the badge, usually static.

### `label-color`

**Required** Hex or named color for the label. Default: `555`

### `status`

**Required** The right status as the badge, usually based on results.

### `color`

**Required** An array (comma separated) with hex or named colors of the badge value background. More than one creates gradient background. Default: `blue`.

### `style`

**Required** Badge style: flat or classic. Default: `classic`

### `icon`

Use icon.

### `icon-width`

Set this if icon is not square. Default: `13`

### `scale`

Set badge scale. Default: `1`

### `path`

The file path to store the badge image file. Only output to `badge` action output if not defined.

## Outputs

### `badge`

The badge SVG contents.

## Example usage

uses: emibcn/clover-coverage-badges-action@v1
with:
  label: 'Test coverage'
  status: '53.4%'
  color: 'blue,555,daf'
  path: '.github/badges/coverage.svg'
