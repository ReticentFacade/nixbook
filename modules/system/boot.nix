{pkgs, ...}: {
  boot = {
    loader = {
      systemd-boot = {
        enable = true;
        configurationLimit = 14;
      };

      efi.canTouchEfiVariables = true;
    };
  };
}
