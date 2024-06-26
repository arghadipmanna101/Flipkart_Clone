function startVoiceSearch() {
    if ('webkitSpeechRecognition' in window) {
        var recognition = new webkitSpeechRecognition();
        recognition.lang = 'en-US';

        recognition.onstart = function() {
            console.log('Voice search started...');
        };

        recognition.onresult = function(event) {
            var transcript = event.results[0][0].transcript;
            document.getElementById('searchInput').value = transcript;
            console.log('Voice search result:', transcript);
            // Here you can trigger search based on the transcript
        };

        recognition.onerror = function(event) {
            console.error('Voice search error:', event.error);
        };

        recognition.onend = function() {
            console.log('Voice search ended.');
        };

        recognition.start();
    } else {
        alert('Voice search not supported in your browser.');
    }
}
