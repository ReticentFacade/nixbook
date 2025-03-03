{ pkgs, ... }: {
  programs.bat = {
    enable = true;
    config = {
      # pager = "less -FR";
      # theme = "catppuccin-mocha";
    };
	#    themes = {
	#      catppuccin-mocha = {
	# src = catppuccin-mocha;
	# file = "Catppuccin-mocha.tmTheme";
	#      };
	#    };
  };
}
