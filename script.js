// Project summaries are copied directly from each repository README.
const projectSummaries = {
  phone: 'Custom smartphone with 4G cellular, GPS, dual USB-C 3.0 ports, upgradeable storage and RAM, and a thermal camera.',
  radar: 'Handheld 2.4 GHz radar system capable of measuring distance, velocity, and Synthetic Aperture Radar (SAR) imaging.',
  nordic: 'Low power wireless IoT sensing PCB integrating a Nordic Bluetooth MCU, GNSS receiver, expandable capacitor energy storage, and micropower management.',
  rp2040: 'Dual microcontroller PCB integrating an RP2040 and ESP32-C3 with battery management, motor control, and power regulation.',
  motor: 'Motor control and handheld controller hardware developed for an educational robot at KiP Robotics. Both boards were combined into a single 2-in-1 PCB so they could be snapped apart after manufacturing. Resulting in a lower cost making it more accessible to students.',
  flex: 'Handheld flex-PCB controller designed for an educational robotics platform at KiP Robotics.',
  dac: 'Test board designed to independently control and evaluate 32 varactor diode channels using two 16-channel DACs.',
  audio: 'Audio amplifier PCB designed with Cadence OrCAD and Allegro. The project includes the schematic, PCB layout, source design files, and Gerber files for fabrication.'
};

for (const [id, summary] of Object.entries(projectSummaries)) {
  const project = document.getElementById(id);
  const description = project?.querySelector('.project-lead, .card-copy > p:not(.eyebrow)');
  const repositoryLink = project?.querySelector('.feature-copy > .button, .card-copy > .text-link');
  if (description) description.textContent = summary;
  if (repositoryLink) repositoryLink.textContent = 'View Project Details';
}

// Keep the selected projects together in the featured grid.
const nordicProject = document.getElementById('nordic');
const featuredSection = document.querySelector('.featured-section');
if (nordicProject && featuredSection) featuredSection.appendChild(nordicProject);
