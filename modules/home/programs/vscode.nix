{pkgs, ...}: {
  programs.vscode = {
    enable = true;
    package = pkgs.vscode-insiders;
    extensions = with pkgs.vscode-extensions; [
      # JavaScript & TypeScript
      ms-vscode.vscode-typescript-next
      dbaeumer.vscode-eslint
      esbenp.prettier-vscode

      # Next.js (React)
      pranaygp.vscode-css-peek
      jpoissonnier.vscode-styled-components
      bradlc.vscode-tailwindcss

      # HTML & CSS
      ecmel.vscode-html-css
      zignd.html-css-class-completion
      formulahendry.auto-close-tag
      formulahendry.auto-rename-tag

      # C++ (IntelliSense + Debugging)
      ms-vscode.cpptools
      twxs.cmake
      jeff-hykin.better-cpp-syntax

      # Markdown & Docs
      yzhang.markdown-all-in-one
      DavidAnson.vscode-markdownlint
    ];

    userSettings = {
      "editor.fontSize" = 14;
      "editor.tabSize" = 4;

      "editor.formatOnSave" = true;
      "files.autoSave" = "afterDelay";

      # Enable ESlint + Prettier for JS/TS
      "editor.defaultFormatter" = "esbenp.prettier-vscode";
      "eslint.alwaysShowStatus" = true;
      "eslint.format.enable" = true;

      # C++ IntelliSense
      "C_Cpp.intelliSenseEngine" = "Default";
      "C_Cpp.formatting" = "clangFormat";
    };
  };
}
