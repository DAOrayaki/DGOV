for i in "$1"/*.json;do
  [ -z "${i%%*.min.json}" ] && continue 
  m=${i%%.json}.min.json
  echo "Minimizing truffle json artifact: $i"
  echo "Original size: $(wc -c "$i")"
  jq 'del(.ast,.legacyAST,.source,.deployedSourceMap,.userdoc,.sourcePath)' $i > $m
  echo "Minimized size: $(wc -c "$m")"
done
