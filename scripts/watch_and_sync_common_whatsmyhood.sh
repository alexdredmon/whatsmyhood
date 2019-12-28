#!/bin/bash

# Keep common files synced since react native/create react app can't alias/import above
# root
# https://github.com/facebook/react-native/issues/637#issuecomment-109628336
# https://dev.to/kylessg/a-sensible-approach-to-cross-platform-development-with-react-and-react-native-57pk


LINE=$(ps aux | grep -w "watch_and_sync_common_whatsmyhood.sh" | grep -v grep | wc -l)
echo $LINE

if [ "$LINE" -le "3" ]
then
    chsum1=""
    while [[ true ]]
    do
        chsum2=`find ../common/ -type f -exec md5 {} \;`
        if [[ $chsum1 != $chsum2 ]] ; then           
            rsync -r ../common ../mobile/src
            rsync -r ../common ../web/src
            chsum1=$chsum2
        fi
        sleep 2
    done
 else
     echo "Common sync already running"
     exit
fi
