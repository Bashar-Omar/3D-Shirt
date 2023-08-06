/* eslint-disable react/prop-types */
import CustomButton from './CustomButton';

const FilePicker = ({ file, setFile, readFile }) => {
  return (
    <div className="filepicker-container">
      <div className="flex flex-1 flex-col">
        <input
          type="file"
          id="file-upload"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label htmlFor="file-upload" className="filepicker-label">
          Upload File
        </label>
        <p className="mt-2 truncate text-xs text-gray-200">
          {file === '' ? 'No File Selected' : file.name}
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <CustomButton
            type="outline"
            title="Logo"
            handleClick={() => readFile('logo')}
            customStyles="text-xs"
          />
          <CustomButton
            type="filled"
            title="Full Texture"
            handleClick={() => readFile('full')}
            customStyles="text-xs"
          />
        </div>
      </div>
    </div>
  );
};

export default FilePicker;
