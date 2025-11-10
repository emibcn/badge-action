[![.github/workflows/test.yml](https://github.com/emibcn/badge-action/workflows/.github/workflows/test.yml/badge.svg)](https://github.com/emibcn/badge-action/actions)
![.github/workflows/test.yml](https://raw.githubusercontent.com/emibcn/badge-action/badges/master/test-badge.svg)
[![DeepSource](https://deepsource.io/gh/emibcn/badge-action.svg/?label=active+issues&show_trend=true&token=q5_59ceYB1F8e9JRV7HuHuFh)](https://deepsource.io/gh/emibcn/badge-action/?ref=repository-badge)

# Badge action

This action generates a SVG badge using GitHub Actions and GitHub Workflow CPU time (no 3rd parties servers). The badge is generated using the NPM package [gradient-badge](https://github.com/bokub/gradient-badge) and [Github Badge Action](https://www.npmjs.com/package/github-badge-action) to read and write the GitHub Actions inputs and outputs.

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

```
uses: emibcn/badge-action@v2.0.2
with:
  label: 'Test coverage'
  status: '53.4%'
  color: 'blue,555,daf'
  path: '.github/badges/coverage.svg'
```

### Commit the changes to dedicated branch

Create the dedicated branch `badges` with (extracted from [StackOverflow](https://stackoverflow.com/a/11487993/2928168)):

```
git checkout master
git checkout --orphan badges

# Unstage all the files in your working tree.
git rm --cached $(git ls-files)

# Create a dedicated README file, so it's clear what's going on here
echo '# Badges branch' > README.md
git add README.md
git commit -m 'Add dedicated README'
git push origin badges
```

And then, [follow the example](https://github.com/emibcn/badge-action/blob/master/.github/workflows/test.yml#L44).

### Commit the changes to same branch

See a [workflow example](https://github.com/emibcn/badge-action/blob/master/.github/workflows/test.yml#L60).
Or another [more complex example](https://github.com/emibcn/pywisp/blob/master/.github/workflows/test.yml#L178).

Note: You will need to pull auto-generated commits with this technique, or your repo will mess up.
