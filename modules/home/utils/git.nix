{ pkgs, ... }: {
  programs.git = {
    enable = true;

    aliases = {};
  
    extraConfig = {
      core = {
        editor = "nvim";
      };
    };
  };
}
