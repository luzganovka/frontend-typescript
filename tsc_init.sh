if ! command -v tsc &> /dev/null; then
  echo "Ошибка: TypeScript не установлен. Установите его командой:"
  echo "bash ./install_dependencies.sh"
  exit 1
fi

SRC_DIR="./tsc"
OUT_DIR="./js"

mkdir -p $SRC_DIR $OUT_DIR
tsc --init
    # "outDir": "./js",
    # "rootDir": "./tsc",
tsc --watch

echo "Проект инициализирован:"
echo "- Исходники: $SRC_DIR"
echo "- Компиляция: $OUT_DIR"
echo "- Конфиг: tsconfig.json"