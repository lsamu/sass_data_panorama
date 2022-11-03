
DIR="./lib/"

if [ ! -d $DIR ]; then
  mkdir $DIR
fi
cp -r ../lib/** $DIR