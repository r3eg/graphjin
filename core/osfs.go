package core

import (
	"errors"
	"io/fs"
	"os"
	"path/filepath"
)

type osFS struct {
	bp string
}

func NewFS(basePath string) *osFS { return &osFS{bp: basePath} }

func (f *osFS) Get(path string) ([]byte, error) {
	return os.ReadFile(filepath.Join(f.bp, path))
}

func (f *osFS) Put(path string, data []byte) (err error) {
	path = filepath.Join(f.bp, path)

	dir := filepath.Dir(path)
	ok, err := f.Exists(dir)
	if !ok {
		err = os.MkdirAll(dir, os.ModePerm)
	}
	if err != nil {
		return
	}

	return os.WriteFile(path, data, os.ModePerm)
}

func (f *osFS) Exists(path string) (ok bool, err error) {
	if _, err = os.Stat(filepath.Join(f.bp, path)); err == nil {
		ok = true
	} else {
		if errors.Is(err, fs.ErrNotExist) {
			err = nil
		}
	}
	return
}
