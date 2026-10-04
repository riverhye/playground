CC = cc
CFLAGS = -Wall -Wextra -g
BUILD = build

%: %.c
	@mkdir -p $(BUILD)
	$(CC) $(CFLAGS) $< -o $(BUILD)/$@

clean:
	rm -rf $(BUILD)