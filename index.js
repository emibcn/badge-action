const core = require('@actions/core');
const gradientBadge = require('gradient-badge');
const fs = require('fs');


try {

  // Get action inputs
  const label      = core.getInput('label'      );
  const labelColor = core.getInput('label-color');
  const status     = `${core.getInput('status'     )}`; // Ensure string
  const gradient   = core.getInput('color'      )
    .split(',')                      // Color gradient as Array
    .map( color => color.trim(' ') ) // Clean spaces;
  const style      = core.getInput('style'      );
  const icon       = core.getInput('icon'       );
  const iconWidth  = core.getInput('icon-width ');
  const scale      = core.getInput('scale'      );
  const path       = core.getInput('path'       );

  const inputs = {
    label,
    labelColor,
    status,
    gradient,
    style,
    icon: (icon && icon.length ? icon : null),
    iconWidth,
    scale,
  };

  console.log("Generate badge using the given inputs and defaults: ", inputs);

  // Generate the badge
  const svgString = gradientBadge( inputs );

  // Output badge contents to Action output
  core.setOutput("badge", svgString);

  // If path is defined, save SVG data to that file
  if ( path && path.length ) {
    console.log(`Write data to file ${path}...`);

    // In case an error occurred writing file,
    // exception is thrown and success messsage is not printed
    fs.writeFileSync(path, svgString);
    console.log("Data saved succesfully.");
  }

} catch (error) {
  core.setFailed(error.message);
}
