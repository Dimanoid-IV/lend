import subprocess

def run(cmd):
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True)
        print(f"Command: {cmd}")
        print(f"STDOUT: {result.stdout}")
        print(f"STDERR: {result.stderr}")
        print("-" * 20)
    except Exception as e:
        print(f"Error running {cmd}: {e}")

run("git init")
run("git add .")
run("git commit -m 'Initial commit for lend'")
run("gh repo create lend --public --source=. --remote=origin --push")
