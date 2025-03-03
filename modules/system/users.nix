{pkgs, ...}: {
  users = {
    users = {
      reticent = {
        isNormalUser = true;
        description = "ReticentFacade";
        extraGroups = ["networkmanager" "wheel"];
        shell = pkgs.nushell;
        packages = with pkgs; [
          vim
        ];
      };
    };
  };
}
