module.exports = {
  /*
    Add [{CURRENT_DIR}] to get the current directory
    Separate nested directories into array elements
    
    eg
      ['[{CURRENT_DIR}]', 'stream_assets', 'now_playing']
    when running in 'C:\work' translates to
      C:\work\stream_assets\now_playing\
  */
  outputDir: ['[{CURRENT_DIR}]', 'output'],

  /*
    List of file outputs with string formats
    Each formatted string will be placed into a new file using the filename
    
    List of usable variables:
      [{TITLE}] - Track title
      [{ARTIST}] - Track artists separated by commas
      [{ALBUM}] - Track album
      [{LENGTH}] - Length of track
      [{PROGRESS}] - Current playback progress
  */

  formatStrings: [{
    filename: 'trackinfo.txt',
    formatString: '[{ARTIST}] - [{TITLE}]',
  }, {
    filename: 'progress.txt',
    formatString: '[{PROGRESS}] / [{LENGTH}]',
  }],
}