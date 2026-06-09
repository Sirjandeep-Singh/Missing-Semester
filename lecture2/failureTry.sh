i=0

while true
do
    output=$(bash mn.bash)
    status=$?

    if [ "$status" -ne 0 ]; then
        echo "Stopped with exit code $status"
        echo "Last output: $output"
        break
    fi

    ((i++))
done

echo "Successful runs: $i"