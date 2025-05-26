FROM mcr.microsoft.com/devcontainers/javascript-node:20

# devcontainer環境に Docker Compose をインストール
RUN curl -SL "https://github.com/docker/compose/releases/latest/download/docker-compose-linux-x86_64" -o /usr/local/bin/docker-compose && \
    chmod +x /usr/local/bin/docker-compose

# mise（バージョン管理ツール）をインストール
RUN curl -fsSL https://mise.run | sh && \
    mkdir -p /home/vscode/.local/bin && \ 
    cp /root/.local/bin/mise /home/vscode/.local/bin/ && \
    # chown -R vscode:vscode /home/vscode/.local && \
    ln -s /home/vscode/.local/bin/mise /usr/local/bin/mise && \
    chmod +x /usr/local/bin/mise && \
    echo 'export PATH="$HOME/.local/bin:$PATH"' >> /etc/bash.bashrc && \
    echo 'eval "$(mise activate bash)"' >> /etc/bash.bashrc

# node_modules用キャッシュディレクトリの作成
RUN mkdir -p /workspace/.npm

# PATH を適切に設定
ENV PATH="/root/.local/bin:${PATH}"