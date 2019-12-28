import os
from config import basedir

def import_all_modules(file_or_directory):
    directory = os.path.dirname(file_or_directory)
    for module in os.listdir(directory):
        if module == '__init__.py' or module[-3:] != '.py':
            continue
        import_path = directory.replace(basedir, "")
        if import_path.startswith("/"):
            import_path = import_path[1:].replace("/", ".")
        __import__(
            f"{import_path}.{module[:-3]}",
            locals(),
            globals(),
        )
    del module
